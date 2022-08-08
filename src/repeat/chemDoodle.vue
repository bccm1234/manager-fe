<template>
  <div id="app">
    <center>
      <div class="containerBox">
        <canvas id="canvasDom" class="chemCanvas"></canvas>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    cifUrl: {
      type: String,
      require: true,
    },
    canvasWH: {
      type: Array,
      default: () => [420, 420],
    },
  },
  data() {
    return {
      cifData: {},
      viewer: null,
    };
  },
  mounted() {
    this.getCifData();
  },
  watch: {
    cifData: {
      handler: function () {
        this.crystalPrepare();
        this.resetting([2, 2, 2]);
      },
      deep: true,
    },
  },
  methods: {
    async getCifData() {
      this.cifData = await this.$api.getCifData(this.cifUrl);
    },
    /* eslint-disable */
    crystalPrepare() {
      //---create canvas---//
      this.viewer = new ChemDoodle.TransformCanvas3D(
        "canvasDom",
        this.canvasWH[0] - 20,
        this.canvasWH[1] - 20
      ); /* setup canvas (name, width, height) */
      this.viewer.styles.set3DRepresentation(
        "Ball and Stick"
      ); /* set the atom/bond 'Stick', 'Line', 'van der Waals Spheres'(ball), 'Wireframe' */
      this.viewer.styles.backgroundColor = null; /* set canvas bgc */
      this.viewer.styles.projectionPerspective_3D = false; /* 是否开透视 */
      this.viewer.styles.shapes_color = "black"; /* unitcell box line color */
      this.viewer.styles.atoms_useJMOLColors = true; /* 原子颜色用Jmol */
      this.viewer.styles.compass_display = true; /* 添加罗盘 */
      this.viewer.styles.compass_size_3D = 40; /* 罗盘大小 */
    },
    resetting(xyz) {
      let cif = ChemDoodle.readCIF(this.cifData, xyz[0], xyz[1], xyz[2]);
      this.viewer.loadContent([cif.molecule], [cif.unitCell]);
    },
  },
};
</script>

<style scoped>
.containerBox {
  position: relative;
  top: 10px;
}
</style>
