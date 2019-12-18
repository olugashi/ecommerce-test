import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

function AdminFormAddItem() {
  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [Tags, setTags] = useState("");
  const [Images, setImages] = useState("");
  const [Description, setDescription] = useState("");

  const handleSubmit = e => {
    console.log(Title);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Title</label>
        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Price</label>
        <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <input placeholder="Tags" onChange={e => setTags(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Images</label>
        <input placeholder="Images" onChange={e => setImages(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          placeholder="Description"
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AdminFormAddItem;
