import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./List";
import View from "./View";

function App() {
    const [selectedItem, setSelectedItem] = useState(0);
    const [list, setList] = useState([]);

    const addItem = (item) => {
        setList([
            ...list,
            {
                name: item.name,
                quantity: item.quantity,
                image: item.image,
            },
        ]);
    };

    const deleteItem = (index) => {
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1, list.length),
        ]);
    };

    return (
        <div className="App">
            <h1>Grocery</h1>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="list"
                        element={
                            <List
                                list={list}
                                addItem={addItem}
                                deleteItem={deleteItem}
                                setSelectedItem={setSelectedItem}
                            />
                        }
                    />
                    <Route
                        path="view"
                        element={<View item={list[selectedItem]} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
