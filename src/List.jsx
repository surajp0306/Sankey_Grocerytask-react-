import { useNavigate } from 'react-router-dom';
import { useState } from "react";


const List = (props) => {
	const navigate = useNavigate();
	const { list, addItem, deleteItem, setSelectedItem } = props;

	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState("");
	const [image, setImage] = useState("");

	return (
		<div class="main-container">
			<h2>Add Grocery</h2>
			<div class="in-container">	
				<label>Item Name : </label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<label>Quantity : </label>
				<input
					type="text"
					name="quantity"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				/>
				<br />
				<label>Image URL :</label>
				<input
					type="text"
					name="image"
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>
				<br />
				<button class="add"
					onClick={() => {
						if (name.length == 0 || quantity.length == 0 || image.length == 0) {
						alert("field is empty");
						return;
						}
						addItem({ name: name, quantity: quantity, image: image });
						setName("");
						setQuantity("");
						setImage("");
					}}
				>
					Add
				</button>
			</div>
			<h2>Lists</h2>
			<table class="list-table">
				<thead>
					<tr id='list-header'>
						<th>Product Name</th>
						<th>Quantity</th>
						<th>Image URL</th>
					</tr>
				</thead>
				<tbody>
					{list.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.quantity}</td>
								<td>{item.image}</td>
								<td>
									<button onClick={() => {
									setSelectedItem(index);
									navigate('/view');
									}} >View</button>
									<button onClick={() => deleteItem(index)}>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default List;