<?php include_once('includes/header.php') ?>
    <div id="header-subpage" class="outer contact-sub clearafter">
        <div class="shape"></div>
        <img src=" css/imgs/phone.jpg" alt="Phone" class="phone" />
        <div class="contactbbox transparentbox">
            <span class="title">Roots Dental - Bangalore</span>
            <p>
                # 35/1,1st Floor,
                <br> Cunningham Road,
                <br> Bangalore - 560052, INDIA. (Opposite KFC)
            </p>
            <span class="short"><i class="fa fa-mobile" aria-hidden="true"></i></span> <a href="tel:08041131161">080 411 311 61 
</a>
            <br>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
<a class="last" href="mailto:drvinod@rootsdental.in">drvinod@rootsdental.in</a>
            <br><br><span class="title">Roots Dental - Kolar</span>
            <p>
                # 32 B, 1st Floor,
                <br> Jayanagar Tekal Road,
                <br> Kolar - 563101,
                <br> INDIA. (Near Mini Hotel Circle)<br><br>
                <span class="short"><i class="fa fa-mobile" aria-hidden="true"></i>
</span> <a href="tel:08152402014">08152 402014
</a>
            <br>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
<a class="last" href="mailto:drvinod@rootsdental.in">drvinod@rootsdental.in</a>
            </p>
        </div>
        <img src=" css/imgs/titles/contact.png" alt="Contact" class="title" />
    </div>
    <div class="_content7 outer clearafter">
        <div class="inner clearafter">
            <div id="appointmentform">
                <h3>Appointment Request</h3>
                <div class="thanks-for-contacting">Thank you.
                    <br />We will respond to your request soon.</div>
                <div class="form-error"></div>
                <form action="mail/appointment.php">
                    <div class="form homeleftform">
                        <input type="text" name="name" placeholder="Name (First/Last):*" required/>
                        <input type="text" name="mobile" placeholder="Phone Number:*" required/>
                        <input type="text" name="email" placeholder="Email Address:*" required/>
                    </div>
                    <div class="form homerightform">
                        <textarea name="message" placeholder="Your comment:"></textarea>
                    </div>
                    <div class="clear"></div>
                    <div class="form submitbutton">
                        <input type="submit" value="Submit" class="submit-btn">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <?php include_once('includes/footer.php') ?>