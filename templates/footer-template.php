            <div class="footer">
                <div class="paddingLeftRight">
                    <div class="footerContent">
                        <div class="wow flipInX center <?php if($mobileShowAnimation != "") { echo $mobileShowAnimation; }?>">
                            <div class="main-content-header">
                                <h2><i class="fa fa-envelope-o fa-icon-tim" aria-hidden="true"></i>Get in <span class="spanMainColor">contact</span> with me!</h2>
                                <div class="aboutMe">
                                    <div class="aboutMeLeft footerLeft"><div class="footerLeftContent">Do <span class="spanMainColor">you</span> have a project for me? Do you want to let me know how awesome this website is? If you have any questions I can help you with, you can fill in the contact form and I'll respond as soon as possible!<div class="socialShareContainer"><?php echo "<strong>Share this online:</strong><br />"; socialMedia('facebook,twitter,whatsapp,google'); ?></div></div></div>
                                    <div class="aboutMeRight footerRight">
                                        <form action="sendContact.php?lastUrl=<?php echo $actualLink; ?>" method="post" class="formClass">
                                            <input type="text" name="persoonNaam" class="inputField" placeholder="Your name" required /><br>
                                            <input type="email" name="persoonEmail" class="inputField" placeholder="Your email" required /><br>
                                            <textarea class="inputField longtext" name="persoonPost" maxlength="999999999" placeholder="Your Message" required></textarea><br><br>
                                            <div class="g-recaptcha" data-sitekey="INSERT-RECAPTCHA-GOOGLE-CODE-ID"></div><br>
                                            <input type="submit" name="submitPost" value="Send message" class="buttonSubmit hvr-shrink" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottomFooter">
                <div class="paddingLeftRight">
                    <div class="bottomFooterContent">
                        <div class="bottomFooterContentLinks">&copy Tim Knobben <strong>2018</strong></div>
                        <div class="bottomFooterContentRechts">Live since <strong>23 March 2018</strong></div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>