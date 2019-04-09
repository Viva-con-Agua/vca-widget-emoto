<template>
  <div class="navbar-collapse collapse" id="navbar-main">
    <ul class="nav navbar-nav navbar-right">
      <MenuEntry :key="key" :entry="entry" type="button" :layer="0" />
    </ul>
  </div>
</template>

<script>
import MenuEntry from '@/components/MenuEntry'
import axios from 'axios'

export default {
  name: 'EmotoButton',
  components: { MenuEntry },
  data () {
    return {
      access: false,
      key: 'EMOTO1',
      entry: {
        'lable': 'EMOTO',
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

<style scoped lang="less">
  @import "./../assets/less/general.less";
  @import "./../assets/less/responsive.less";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

  .navbar {
min-height: 64px;
  }

  .navbar-vca {
    .colorProfilePrimary();
    border-radius: 0;
    border: 0;
    /*top: 0;*/
    text-transform: uppercase;
    font-weight: bold;
    padding: 0.5em 0;
    margin-bottom: 2em;
    .navbar-header {
      .navbar-brand {
        color: #colors[secundary];
      }
      .navbar-toggle {
        border-color: #colors[secundary];
        &:focus, &:hover {
          background-color: lighten(#colors[primary], 20%);
        }
        .icon-bar {
          background-color: #colors[secundary];
        }
      }
    }
    .navbar-collapse, .navbar-form {
      border: 0;
      .nav {
        @media @tablet-down {
          margin-top: 0px;
          margin-bottom: 0px;
          padding-top: 0.5em;
        }
      }
    }
    .navbar-brand {
      margin: 0 0.5em 0 0;
      padding: 0px;
      display: flex;
      flex-direction: row;
      @media @tablet-down {
        margin-left: 0.5em;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        span.bold {
          font-size: 1.6em;
        }
      }
      img {
        margin-right: 0.5em;
        font-size: 0.6em;
      }
    }
  }
</style>
