<template>
  <footer>
    <div class="footer-container">
      <section class="footer-container-top">

        <div class="footer-container-top-infos">
          <p class="footer-container-top-infos-greeting">Thank you for supporting us!</p>
          <p class="footer-container-top-infos-platforms">Let's get in touch on any of these platforms.</p>
        </div>

        <div class="footer-container-top-social">
          <SocialButton type="twitter" route="https://twitter.com/SikayetvarCom">
            <IconTwitter/>
          </SocialButton>

          <SocialButton type="facebook" route="https://www.facebook.com/sikayetvar">
            <IconFacebook/>
          </SocialButton>

          <SocialButton type="dribble">
            <IconDribble/>
          </SocialButton>

          <SocialButton type="github">
            <IconGithub/>
          </SocialButton>
        </div>


      </section>

      <section class="footer-container-bottom">
        <div class="footer-container-bottom-copyrights">
          <span class="footer-container-bottom-copyrights-symbol">&copy;2018</span>
          <span class="footer-container-bottom-copyrights-brand">Şikayetvar</span>
        </div>

        <nav>
          <a href="/">Posts</a>
        </nav>

      </section>
    </div>
  </footer>
</template>

<script>
import SocialButton from "../SocialButton";
import {IconDribble, IconFacebook, IconGithub, IconTwitter} from "../../assets/icons";

export default {
  name: 'Footer',
  components: {SocialButton, IconDribble, IconGithub, IconFacebook, IconTwitter}
}
</script>

<style scoped>

</style>
