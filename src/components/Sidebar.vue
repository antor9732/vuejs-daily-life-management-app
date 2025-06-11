<script setup>
import { ref } from "vue";
import navMenu  from "./Sidebar/navMenu.vue";
</script>


<template>
   <div >
    <navMenu />
   </div>
</template>



<style lang="scss">
aside {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;

  background: var(--dark-grey);
  color: var(--light);

  transition: all 0.3s ease-in-out;

  .flex {
    flex: 1 1 0;
    min-height: 40px; // Or any value that fits your design
    flex-shrink: 0;
  }

  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
      color: var(--light)
    };
  };
  h1,
  .button .text {
    opacity: 0;
    transition: all 0.3s ease-out;
  };
  h1 {
    color: var(--gray);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: underline;
  }

  .button {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;
    gap: 1rem;

    .material-icons {
      font-size: 1.5rem;
    };
  }

  .router-link-exact-active {
    background: var(--gray);
    .material-icons,
    .text {
      color: var(--dark);
    }
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease-in-out;
      gap: 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: all 0.3s ease-in-out;
      }

      .text {
        color: var(--light);
        font-size: 1.2rem;
        transition: all 0.3s ease-in-out;
      }

      &:hover,
      &.router-link-exact-active {
        background: var(--dark-grey);
        padding: 0.5rem 1rem;

        .material-icons,
        .text {
          color: var(--light-green);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    };
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: all 0.3s ease-in-out;

    .menu-toggle {
      transition: all 0.3s ease-in-out;

      .material-icons {
        color: var(--light);
        font-size: 2rem;
        transition: all 0.3s ease-in-out;
      };
      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        };
      };
    };
  }

  &.is_expanded {
    width: var(--sidebar-width);
    padding: 1rem 2rem;

    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      };
    };
    h1,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      };
    };
  };
  @media (max-width: 768px) {
    position: fixed;
    z-index: 999;
  }
  .flex {
    min-height: 40px;
    flex-shrink: 0;
  };
};
</style>
