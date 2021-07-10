<template>
  <div>
    <header>
      <div>
        <figure>
          <IconLogo/>
        </figure>
        <a href="">Posts</a>
      </div>

      <nav>
        <Button title="Login" type="login"/>
      </nav>


    </header>

  </div>
</template>

<script>
import {IconLogo} from "../../assets/icons";
import Button from "../Button";

export default {
  name: 'Header',
  components: {
    Button,
    IconLogo
  }
}
</script>

<style scoped>

</style>
