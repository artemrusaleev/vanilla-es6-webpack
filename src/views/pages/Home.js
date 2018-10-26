let Home = {
    name: 'home',
    path: '/home/',
    template: `
      <!-- Initial Page, "data-name" contains page name -->
      <div data-name="home" class="page">
        <!-- Scrollable page content -->
        <div class="page-content">
          <p>Page content goes here</p>
          <!-- Link to another page -->
          <a href="/about/">About app</a>
        </div>
      </div>
    `
}

export default Home;