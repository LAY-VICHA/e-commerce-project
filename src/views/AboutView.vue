<script>
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'AboutView',
  components: {
    Header,
    Footer,
  }
}
</script>


<template>
  <Header></Header>

  <div class="about">
    <h2>About Us</h2>
    <p class="paragraph">
      Welcome to ShampooStore!

      At ShampooStore, we are dedicated to provide hight quality product with affordable price. We sell many product around the world.
      So, customers have many choice in choosing which brand that suitable for them. The product also come with multiple scent and size.
      And we sold both shampoo and conditioner. Our target customer is Cambodian and soon to be worldwide
    </p>

    <h2>Our Story</h2>
    <p class="paragraph">
      Our story started with a simple idea: [share the inspiration or motivation behind starting your website or business]. 
      As [founder's name], I wanted to [describe the problem you aimed to solve or the need you wanted to fulfill]. 
      With determination and a passion for [your field or industry], we embarked on a journey to make a difference.
    </p>

    <h2>Our Mission</h2>
    <p class="paragraph">
      At [Your Website Name], our mission is [describe your mission statement or primary goal, e.g., 
      "to empower individuals to achieve their financial dreams" or "to bring joy and comfort to every home"]. 
      We strive to [describe the impact you want to create, e.g., "provide expert guidance" or "offer unique and stylish products"] 
      that [benefits your target audience or community].
    </p>

    <h2>Why Choose Us</h2>
    <ul class="strong-point">
      <ol class="points">Quality: We take pride in [describe the quality standards you uphold, e.g., "sourcing the finest materials" or "delivering accurate and reliable information"].</ol>
      <ol class="points">Expertise: Our team of [mention your expertise or specializations, e.g., "experienced designers" or "certified professionals"] is dedicated to [how you serve your customers].</ol>
      <ol class="points">Customer-Centric: Your satisfaction is our priority. We are here to [describe how you cater to your customers' needs, e.g., "provide exceptional support" or "tailor solutions to your unique requirements"].</ol>
    </ul>
  </div>

  <Footer></Footer>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    padding: 20px 50px;
  }

  h2 {
    font-weight: 700;
  }

  .paragraph {
    font-size: 20px;
  }

  .strong-point{
    list-style-type: disc; 
    margin: 0;
    padding-left: 1.5em;
  }

  .points {
    font-size: 20px;
  }

}
</style>
