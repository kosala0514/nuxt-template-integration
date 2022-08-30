<template>
  <div class="content">
    <div class="page-inner">
      <div class="mt-2 mb-4">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Multi Filter Select</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="product_table"
                  class="display table table-striped table-hover"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>ABCD</th>
                      <th>Type 01</th>
                      <th>$45</th>
                      <th>
                        <img
                          src="https://www.cnet.com/a/img/resize/cdf928eebef9c1858767b32466f6135238c7c749/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=675&width=1200"
                          width="100px"
                          height="50px"
                        />
                      </th>
                      <th>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-primary"
                        >
                          <i class="fa-solid fa-angles-right"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-success"
                        >
                          <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-danger"
                        >
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th>XYZ</th>
                      <th>Type 02</th>
                      <th>$300</th>
                      <th>
                        <img
                          src="https://www.cnet.com/a/img/resize/cdf928eebef9c1858767b32466f6135238c7c749/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=675&width=1200"
                          width="100px"
                          height="50px"
                        />
                      </th>
                      <th>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-primary"
                        >
                          <i class="fa-solid fa-angles-right"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-success"
                        >
                          <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-danger"
                        >
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th>KJL</th>
                      <th>Type 01</th>
                      <th>$450</th>
                      <th>
                        <img
                          src="https://www.cnet.com/a/img/resize/cdf928eebef9c1858767b32466f6135238c7c749/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=675&width=1200"
                          width="100px"
                          height="50px"
                        />
                      </th>
                      <th>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-primary"
                        >
                          <i class="fa-solid fa-angles-right"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-success"
                        >
                          <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-danger"
                        >
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th>QPR</th>
                      <th>Type 05</th>
                      <th>$400</th>
                      <th>
                        <img
                          src="https://www.cnet.com/a/img/resize/cdf928eebef9c1858767b32466f6135238c7c749/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=675&width=1200"
                          width="100px"
                          height="50px"
                        />
                      </th>
                      <th>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-primary"
                        >
                          <i class="fa-solid fa-angles-right"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-success"
                        >
                          <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon btn-round btn-danger"
                        >
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "all",
  layout: "dashboard",
  head: {
    bodyAttrs: {
      "data-background-color": "dark",
    },
  },
  methods: {
    datatable() {
      $("#product_table").DataTable({});
    },
  },
  mounted() {
    this.datatable();
  },
};
</script>
