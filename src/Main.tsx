/// <reference path="../typings/browser.d.ts" />

import * as React from 'react';
import {TodoItem} from './TodoItem';

/**
 * 個々のTodo情報のInterface。
 * keyはtimeをベースに作成
 */
interface ITodo {
    description: string;
    key: number;
}

export interface IMainState {
    newItem?: {
        description: string;
    }
    todoList?: ITodo[];
}

export interface IMainProps { }

export class Main extends React.Component<IMainProps, IMainState> {
    state: IMainState = { 
        newItem: { 
            description: ''
        }, 
        todoList: [] 
    }
    
    constructor() {
        super();
        this.changeName = this.changeName.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    
    /**
     * Todoリスト入力欄のonChangeで呼ばれるメソッド
     * @param {any} e 
     */
    changeName(e: any) {
        this.setState({
            newItem: {
                description: e.target.value
            }
        });
    }

    /**
     * TODOアイテム追加
     */
    addItem() {
        var list = this.state.todoList;
        list.push({
            description: this.state.newItem.description,
            key: new Date().getTime()
        });
        this.setState({
            todoList: list,
            newItem: { description: '' }
        });
    }

    removeItem(item: ITodo) {
        var list = this.state.todoList.filter(i => i.key !== item.key);
        this.setState({ todoList: list });
    }

    render() {
        // Todoアイテムがある場合はそのリストを返す。
        var todoItems = this.state.todoList.map(item => {
            return <TodoItem key={item.key} item={item} onRemove={this.removeItem} ></TodoItem>;
        });
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">TODO</a>
                    </div>
                </nav>
                <div className="row">
                    <div className="col s12">
                        <legend>Input:</legend>
                        <input type="text" placeholder="" value={this.state.newItem.description} onChange={this.changeName} />
                        <button className="waves-effect waves-light btn" onClick={this.addItem} > 登録</button>
                    </div>
                    {todoItems}
                </div>
            </div>
        );
    }
}