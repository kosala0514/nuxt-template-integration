<template>
  <div class="sidebar sidebar-style-2" data-background-color="dark2">
    <div class="sidebar-wrapper scrollbar scrollbar-inner">
      <div class="sidebar-content">
        <div class="user">
          <div class="avatar-sm float-left mr-2">
            <img
              src="/assets/img/profile.jpg"
              alt="..."
              class="avatar-img rounded-circle"
            />
          </div>
          <div class="info">
            <a
              data-toggle="collapse"
              href="#collapseExample"
              aria-expanded="true"
            >
              <span>
                Hizrian
                <span class="user-level">Administrator</span>
                <span class="caret"></span>
              </span>
            </a>
            <div class="clearfix"></div>

            <div class="collapse in" id="collapseExample">
              <ul class="nav">
                <li>
                  <a href="#profile">
                    <span class="link-collapse">My Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#edit">
                    <span class="link-collapse">Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#settings">
                    <span class="link-collapse">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="nav nav-primary">
          <li class="nav-section">
            <span class="sidebar-mini-icon">
              <i class="fa fa-ellipsis-h"></i>
            </span>
            <h4 class="text-section">Admin Panel</h4>
          </li>
          <li class="nav-item">
            <a data-toggle="collapse" href="#base">
              <i class="fas fa-layer-group"></i>
              <p class="px-2">Products</p>
              <span class="caret"></span>
            </a>
            <div class="collapse" id="base">
              <ul class="nav nav-collapse">
                <li>
                  <NuxtLink to="/add">
                    <span class="sub-item">Add Products</span>
                  </NuxtLink>
                </li>
                <li>
                  <a href="/all">
                    <span class="sub-item">All Products</span>
                  </a>
                </li>
                <li>
                  <a href="/report">
                    <span class="sub-item">Report</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
};
</script>
