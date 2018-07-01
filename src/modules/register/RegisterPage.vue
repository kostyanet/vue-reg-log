<script>
// import {CLEAR_AUTH_DATA, CLEAR_ERROR_MESSAGE, SUBMIT_LOGIN} from '../../store/modules/action.types';

import {Validator} from 'vee-validate';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      login: '',
      password: '',
      password2: '',
      errors: null
    };
  },
  validator: null,
  created() {
    this.validator = new Validator({
      email: 'required|email',
      login: 'required|alpha|min:3|max:30',
      password: 'required|min:8|max:30',
      password2: { required: true, confirmed: 'password' }
    });

    this.$set(this, 'errors', this.validator.errors);
  },
  computed: {
    errorMessage() {
      return null // this.$store.state.register.errorMessage;
    },
    isLoading() {
      return null // this.$store.state.login.isPending;
    }
  },
  methods: {
    onSubmit() {
      this.validator.validateAll({
        email: this.email,
        login: this.login,
        password: this.password,
        password2: this.password2
      }).then((result) => {
        if (result) {
          // eslint-disable-next-line
          console.log('All is well', result);
          return;
        }
        // eslint-disable-next-line
        console.log('Oops!', this);
      });

      // this.$store.dispatch(`register/${SUBMIT_LOGIN}`, {
      //   login: this.login,
      //   password: this.password,
      // }, this.keepLogged);
    },
    clearErrors() {
      this.errors.clear();
      // this.$store.dispatch(`login/${CLEAR_ERROR_MESSAGE}`);
    }
  }
};
</script>

<template src='./RegisterPage.html'></template>

<style lang='scss' scoped>
  .RegisterPage {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__form {
      min-width: 300px;
      width: 350px;
    }
  }

  .RegisterForm__error {
    color: var(--red);
    margin-bottom: -0.5rem;
  }
</style>
