<div id="social-media" class="outer">
    <div class="shape"></div>

    <div class="titleandbuttons">
        <!--        <h2>social<br/>media</h2>-->
        <a target="_blank" href="https://www.facebook.com/" class="icon-facebook"></a>
<!--
        <a target="_blank" href="https://twitter.com/" class="icon-twitter"></a>
       <a target="_blank" href="#" class="icon-google"></a>
-->
        <a target="_blank" href="https://www.youtube.com/" class="icon-youtube"></a>

    </div>

<!--    <img src="css/imgs/tooth_c.png" alt="Tooth" class="tooth" />-->

</div>

<div id="footer" class="outer clearafter">
    <div class="leftfooter">
        <div class="shape"></div>
        <div class="fbox">
                    <h4 class="transition333">Roots Dental</h4>
            <a class="mitem" href="index.php">Home</a>
            <br />
            <a class="mitem" href="about-us.php">About us</a>
            <br />
            <!--
                <a class="mitem" href="">Case Report</a>
                <br />
-->
            <a class="mitem" href="procedure.php">For Patients</a>
            <br />
            <a class="mitem" href="technology.php">Technology</a>
            <br />
            <a class="mitem" href="academy.php">Courses</a>
            <br />
            <a class="mitem" href="professional.php">For Professionals</a>
            <br />
            <a class="mitem" href="contact.php">Contact Us</a>
        </div>
        <div class="fbox">
            <h4 class="transition333">Contact</h4>
            <!--            <span class="title">Root dental</span>-->
            <p>
                <a target="_blank" class="simple" href="https://www.google.co.in/maps/place/Roots+Dental+Clinic/@12.9724779,77.5466436,12.75z/data=!4m8!1m2!2m1!1sroot+dental!3m4!1s0x0:0x86eef66d19a2756b!8m2!3d12.9915321!4d77.5940537?hl=en">
                    # 35, 1<sup>st</sup> Floor, 
            <br>Cunningham Road,<br>
            Bangalore - 560052,<br>
            INDIA. (Opposite KFC)
			</a>
            </p>
            <span class="short"><i class="fa fa-mobile" aria-hidden="true"></i></span><a class="simple" href="tel:+08041131161">080 411 311 61</a>
            <br />
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <a class="simple last" href="mailto:drvinod@rootsdental.in">drvinod@rootsdental.in</a>
        </div>
        <div id="copyright">
            <span>2024 &copy; Roots Dental</span>
        </div>

    </div>

    <div class="rightfooter">
        <div class="shape"></div>
        <a target="_blank" href="https://www.google.co.in/maps/place/Roots+Dental+Clinic/@12.9724779,77.5466436,12.75z/data=!4m8!1m2!2m1!1sroot+dental!3m4!1s0x0:0x86eef66d19a2756b!8m2!3d12.9915321!4d77.5940537?hl=en" id="findonmap" target="_blank">
            <img src="css/svg/tooth.svg" alt="Tooth icon" class="tooth_icon" />
            <img src="css/svg/circle.svg" alt="Circle" class="circle" /> Find on map </a>
        <div id="copyright2">
            <span>2024 © Roots dental</span>
        </div>
        <div id="developer">
            <span>A website by </span>
            <a href="https://thynkk.in/" target="_blank">Thynkk.in</a>
        </div>
    </div>
</div>
<script>
    /* Pop Box */

    var modalparent = document.getElementsByClassName("modal_multi");
    var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
    var span_close_multi = document.getElementsByClassName("close_multi");

    function setDataIndex() {

        for (i = 0; i < modal_btn_multi.length; i++) {
            modal_btn_multi[i].setAttribute('data-index', i);
            modalparent[i].setAttribute('data-index', i);
            span_close_multi[i].setAttribute('data-index', i);
        }
    }

    for (i = 0; i < modal_btn_multi.length; i++) {
        modal_btn_multi[i].onclick = function() {
            var ElementIndex = this.getAttribute('data-index');
            modalparent[ElementIndex].style.display = "block";
        };
        span_close_multi[i].onclick = function() {
            var ElementIndex = this.getAttribute('data-index');
            modalparent[ElementIndex].style.display = "none";
        };

    }
    window.onload = function() {

        setDataIndex();
    };
    window.onclick = function(event) {
        if (event.target === modalparent[event.target.getAttribute('data-index')]) {
            modalparent[event.target.getAttribute('data-index')].style.display = "none";
        }

        // OLD CODE
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
</script>
</body>

</html>