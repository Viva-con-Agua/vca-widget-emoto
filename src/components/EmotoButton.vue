<template>
  <li v-if="getAccess()" :class="getClass()" ref="menuEntry" >
    <a href="/emoto">EMOTO</a>
  </li>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EmotoButton',
  data () {
    return {
      access: false,
      key: 'EMOTO1',
      entry: {
        'lable': 'EMOTO - Dein Stimmungsbarometer',
        'render': true,
        'url': '/emoto',
        'permission': [{ 'role': 'supporter' }]
      }
    }
  },
  created () {
    this.validateAccess()
  },
  methods: {
    getClass() {
      return "vca-button-primary"
    },
    getAccess() {
      return this.access
    },
    validateAccess: function () {
      return axios.get('/drops/webapp/identity', {
        headers: {
          'Access-Control-Allow-Credentials': 'true'
        }
      })
        .then(response => {
          const userId = response.data.additional_information.id
          if (response.data.additional_information.profiles.length > 0) {
            const email = response.data.additional_information.profiles[0].email
            return axios.post('/emotobackend/user/access', {
              userId: userId,
              email: email
            })
          } else {
            return new Error('no e-mailadresse availabel')
          }
        })
        .then(response => {
          if (response.data.access) {
            this.access = true
          }
        })
        .catch(() => {
          this.access = false
        })
    }
  }
}
</script>
