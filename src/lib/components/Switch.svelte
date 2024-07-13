<style>
.switch {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 50px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 42px;
  width: 42px;
  left: 4px;
  bottom: 4px;
  border-radius: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color:#d81b60;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(50px);
  -ms-transform: translateX(50px);
  transform: translateX(50px);
}

</style>
<script>
    export let leftLabel;
    export let rightLabel;
</script>
<label class="switch">
    <input type="checkbox">
    <span class="slider"></span>
</label>