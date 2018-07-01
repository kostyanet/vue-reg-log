<script>
import {Validator} from 'vee-validate';
import {CLEAR_ERROR_MESSAGE, SUBMIT_USER} from '@/store/modules/registration/action.types';

// todo: canLeave guard
// todo: success modal --> redirect to login

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: 'qwe@qw.qw',
      login: 'kostya',
      password: 'kostyanet',
      password2: 'kostyanet',
      errors: null
    };
  },
  validator: null,
  created() {
    this.validator = new Validator({
      email: 'required|email',
      login: 'required|alpha|min:3|max:30',
      password: 'required|min:8|max:30',
    });

    this.$set(this, 'errors', this.validator.errors);
  },
  computed: {
    errorMessage() {
      return this.$store.state.registration.errorMessage;
    },
    isLoading() {
      return this.$store.state.registration.isPending;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.email || this.login || this.password) {
      next();
    } else {
      next();
    }
  },
  methods: {
    onSubmit() {
      this.validator.validateAll({
        email: this.email,
        login: this.login,
        password: this.password,
        password2: this.password2
      }).then((isValid) => {
        const isPassCopyOk = this.password === this.password2;

        if (!isPassCopyOk) {
          this.errors.add({ field: 'password2', msg: 'The password confirmation does not match.' });

        } else if (isPassCopyOk && isValid) {
          this.$store.dispatch(`registration/${SUBMIT_USER}`, {
            email: this.email,
            name: this.login,
            password: this.password
          });
        }
      });
    },
    clearErrors() {
      this.errors.clear();
      this.$store.dispatch(`registration/${CLEAR_ERROR_MESSAGE}`);
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
