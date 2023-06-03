import React, { Component } from "react";
import "./index.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import SearchPanel from "./Components/SearchPanel/SearchPanel";
import ItemStatusFilter from "./Components/ItemStatusFilter/ItemStatusFilter";
import TodoList from "./Components/ToDoList/ToDoList";
import ItemAddForm from "./Components/ItemAddForm/ItemAddForm";

export default class App extends Component {
  maxId = 10000;

  state = {
    items: [
      {
        id: 1,
        label: "Drink Coffee",
        important: false,
        done: ''
      },
      {
        id: 2,
        label: "Prepare lunch",
        important: true,
        done: ''
      },
      {
        id: 3,
        label: "Go to the park",
        important: true,
        done: ''
      }
    ],
    filter: "all", // active, all, done
    search: ""
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: '',
      id: this.maxId++
    };
  }

  addItem = label => {
    this.setState(state => {
      const item = this.createTodoItem(label);
      return { items: [...state.items, item] };
    });
  };

  toggleDone = id => {
    this.setState(({ items }) => {
      const idx = items.findIndex(el => el.id === id);
      const oldItem = items[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [
        ...items.slice(0, idx),
        newItem,
        ...items.slice(idx + 1)
      ];
      return {
        items: newArray
      };
    });
  };

  deleteItem = id => {
    this.setState(({ items }) => {
      const idx = items.findIndex(el => el.id === id);
      const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
      return {
        items: newArray
      };
    });
  };

  onSearchChange = search => {
    this.setState({ search });
  };
  onFilterChange = filter => {
    this.setState({ filter });
  };
  filterItems(items, filter) {
    if (filter === "all") {
      return items;
    } else if (filter === "active") {
      return items.filter(item => !item.done);
    } else if (filter === "done") {
      return items.filter(item => item.done);
    }
  }

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  render() {
    const { items, filter, search } = this.state;
    const visibleItems = this.filterItems(
      this.searchItems(items, search),
      filter
    );

    const doneCount = items.filter(el => el.done).length;
    const todoCount = items.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.toggleDone}  // передача метода toggleDone через пропсы
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}


