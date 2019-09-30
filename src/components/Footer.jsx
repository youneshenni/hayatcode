import React from "react";

export default () => (
  <footer class="footer-area area-padding-top">
    <div class="container">
      <div class="row footer-bottom d-flex justify-content-between">
        <p class="col-lg-8 col-sm-12 footer-text m-0">
          Copyright &copy;
          <script>document.write(new Date().getFullYear());</script> All rights
          reserved | This template is made with{" "}
          <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
        </p>
        <div class="col-lg-4 col-sm-12 footer-social">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-dribbble"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);
