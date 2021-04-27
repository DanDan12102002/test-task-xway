<template>
  <tr>
    <td>
      <div class="user d-flex align-items-center">
        <div class="user-profile mr-3">
          <a target="_blank" :href="influencer.profileUrl">
            <img :src="influencer.avatarUrl" alt="profile_img">
          </a>
        </div>
        <div class="user-nickname">
          <p class="f-b mb-1"><a target="_blank" :href="influencer.profileUrl">@{{influencer.name}}</a></p>
          <p>Instagram</p>
        </div>
      </div>
    </td>
    
    <td><p class="text-right">{{influencer.followers}}</p></td>
    <td><p class="text-right">{{influencer.er}}%</p></td>
  </tr>
</template>

<script>
export default {
  props: {
    influencer: Object
  }
}
</script>