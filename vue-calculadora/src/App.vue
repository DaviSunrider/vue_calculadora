<template>
  <div id="app">
    <div>
      <input type="number" v-model="num1" @input="calculate">
      <select v-model="operator" @change="calculate">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" v-model="num2" @input="calculate">
    </div>
    <div>
      <p>Resultado: {{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      operator: '+',
      result: 0
    };
  },
  methods: {
    calculate() {
      switch (this.operator) {
        case '+':
          this.result = parseFloat(this.num1) + parseFloat(this.num2);
          break;
        case '-':
          this.result = parseFloat(this.num1) - parseFloat(this.num2);
          break;
        case '*':
          this.result = parseFloat(this.num1) * parseFloat(this.num2);
          break;
        case '/':
          this.result = parseFloat(this.num1) / parseFloat(this.num2);
          break;
        default:
          this.result = 0;
      }
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

input, select {
  margin: 10px;
  padding: 5px;
}

p {
  font-weight: bold;
}
</style>
