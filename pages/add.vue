<template>
  <div class="content">
    <div class="page-inner">
      <div class="mt-2 mb-4">
        <form class="card">
          <div class="form-group">
            <label for="name"> Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter product name here..."
            />
          </div>
          <div class="form-group">
            <label for="type"> Type</label>
            <input
              type="text"
              class="form-control"
              id="type"
              placeholder="Enter product type here..."
            />
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input
              type="text"
              class="form-control"
              id="price"
              placeholder="Enter product price here..."
            />
          </div>
          <div class="form-group">
            <label for="image"> Image</label>
            <input
              type="file"
              class="form-control"
              id="image"
              placeholder="Enter product image here..."
            />
          </div>
          <div class="form-group">
            <label for="image"> Description</label>
            <div id="desc"></div>
          </div>
          <div class="card-action">
            <button class="btn btn-success">Submit</button>
            <button class="btn btn-danger">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "add",
  layout: "dashboard",
  head: {
    bodyAttrs: {
      "data-background-color": "dark",
    },
  },
  methods: {
    editor() {
      ClassicEditor.create(document.querySelector("#desc"))
        .then((editor) => {
          console.log(editor);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.editor();
  },
};
</script>
