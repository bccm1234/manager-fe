<template>
  <div>
    <div class="element-top">
      <div class="column">
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.H }"
        >
          H
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Li }"
        >
          Li
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Na }"
        >
          Na
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Ka }"
        >
          Ka
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Rb }"
        >
          Rb
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Cs }"
        >
          Cs
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Fr }"
        >
          Fr
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Be }"
        >
          Be
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Mg }"
        >
          Mg
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Ca }"
        >
          Ca
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Sr }"
        >
          Sr
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Ba }"
        >
          Ba
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Ra }"
        >
          Ra
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Sc }"
        >
          Sc
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Y }"
        >
          Y
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.La }"
        >
          La
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ac }"
        >
          Ac
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ti }"
        >
          Ti
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Zr }"
        >
          Zr
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Hf }"
        >
          Hf
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Rf }"
        >
          Rf
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.V }"
        >
          V
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Nb }"
        >
          Nb
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ta }"
        >
          Ta
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Db }"
        >
          Db
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['*'] }"
        >
          *
        </div>
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive[','] }"
        >
          ,
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Cr }"
        >
          Cr
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Mo }"
        >
          Mo
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.W }"
        >
          W
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Sg }"
        >
          Sg
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['0'] }"
        >
          0
        </div>
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['6'] }"
        >
          6
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Mn }"
        >
          Mn
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Tc }"
        >
          Tc
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Re }"
        >
          Re
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Bh }"
        >
          Bh
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['1'] }"
        >
          1
        </div>
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['7'] }"
        >
          7
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Fe }"
        >
          Fe
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ru }"
        >
          Ru
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Os }"
        >
          Os
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Hs }"
        >
          Hs
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['2'] }"
        >
          2
        </div>
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['8'] }"
        >
          8
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Co }"
        >
          Co
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Rh }"
        >
          Rh
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ir }"
        >
          Ir
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Mt }"
        >
          Mt
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['3'] }"
        >
          3
        </div>
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['9'] }"
        >
          9
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ni }"
        >
          Ni
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Pd }"
        >
          Pd
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Pt }"
        >
          Pt
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ds }"
        >
          Ds
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['4'] }"
        >
          4
        </div>
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['('] }"
        >
          (
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Cu }"
        >
          Cu
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ag }"
        >
          Ag
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Au }"
        >
          Au
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Rg }"
        >
          Rg
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive['5'] }"
        >
          5
        </div>
        <div
          class="base-element column-element color-*"
          @click="searchElement"
          :class="{ active: isActive[')'] }"
        >
          )
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Zn }"
        >
          Zn
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Cd }"
        >
          Cd
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Hg }"
        >
          Hg
        </div>
        <div
          class="base-element column-element color-3 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uub }"
        >
          Uub
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.B }"
        >
          B
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Al }"
        >
          Al
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Ga }"
        >
          Ga
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Ln }"
        >
          Ln
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Tl }"
        >
          Tl
        </div>
        <div
          class="base-element column-element color-4 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uut }"
        >
          Uut
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.C }"
        >
          C
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Si }"
        >
          Si
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Ge }"
        >
          Ge
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Sn }"
        >
          Sn
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Pb }"
        >
          Pb
        </div>
        <div
          class="base-element column-element color-4 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uuq }"
        >
          Uuq
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.N }"
        >
          N
        </div>
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.P }"
        >
          P
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.As }"
        >
          As
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Sb }"
        >
          Sb
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Bi }"
        >
          Bi
        </div>
        <div
          class="base-element column-element color-4 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uup }"
        >
          Uup
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.O }"
        >
          O
        </div>
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.S }"
        >
          S
        </div>
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.Se }"
        >
          Se
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Te }"
        >
          Te
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Po }"
        >
          Po
        </div>
        <div
          class="base-element column-element color-4 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uuh }"
        >
          Uuh
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.F }"
        >
          F
        </div>
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.Cl }"
        >
          Cl
        </div>
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.Br }"
        >
          Br
        </div>
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.I }"
        >
          I
        </div>
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.At }"
        >
          At
        </div>
        <div
          class="base-element column-element color-7 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uus }"
        >
          Uus
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.He }"
        >
          He
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Ne }"
        >
          Ne
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Ar }"
        >
          Ar
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Kr }"
        >
          Kr
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Xe }"
        >
          Xe
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Rn }"
        >
          Rn
        </div>
        <div
          class="base-element column-element color-6 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uuo }"
        >
          Uuo
        </div>
      </div>
    </div>
    <div class="element-bottom">
      <div class="line">
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.La }"
        >
          La
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Ce }"
        >
          Ce
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Pr }"
        >
          Pr
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Nd }"
        >
          Nd
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Pm }"
        >
          Pm
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Sm }"
        >
          Sm
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Eu }"
        >
          Eu
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Gd }"
        >
          Gd
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Tb }"
        >
          Tb
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Dy }"
        >
          Dy
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Ho }"
        >
          Ho
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Er }"
        >
          Er
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Tm }"
        >
          Tm
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Yb }"
        >
          Yb
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Lu }"
        >
          Lu
        </div>
      </div>
      <div class="line">
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Ac }"
        >
          Ac
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Th }"
        >
          Th
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Pa }"
        >
          Pa
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.U }"
        >
          U
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Np }"
        >
          Np
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Pu }"
        >
          Pu
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Am }"
        >
          Am
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Cm }"
        >
          Cm
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Bk }"
        >
          Bk
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Cf }"
        >
          Cf
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Es }"
        >
          Es
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Fm }"
        >
          Fm
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Md }"
        >
          Md
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.No }"
        >
          No
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Lr }"
        >
          Lr
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeriodicTable",
  computed: {
    isActive() {
      return true;
    },
  },
  methods: {
    searchElement(event) {},
  },
};
</script>

<style lang="scss" scoped>
.element-top {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 60rem;
  margin: 2rem auto 1rem;
}

.element-bottom {
  width: 60rem;
  margin: 0.75rem auto;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 3rem;
  height: 100%;
  margin: 0rem 0.15rem;
}

.base-element {
  width: 3rem;
  height: 3rem;
  font-size: 1.125rem;
  font-weight: bolder;
  line-height: 2.625rem;
  text-align: center;
  cursor: pointer;
}

.column-element {
  margin-top: 0.15rem;
}

.line {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3rem;
  margin: 0.75rem auto;
}

.line-element {
  margin: 0rem 0.15rem;
}

.base-color {
  border: 0.1875rem solid rgb(59, 255, 244);
  background: rgb(0, 43, 52);
  color: rgb(119, 232, 255);
}

.color-1 {
  border: 0.1875rem solid rgb(255, 119, 142);
  background: rgb(52, 0, 9);
  color: rgb(255, 119, 142);
}

.color-2 {
  border: 0.1875rem solid rgb(255, 161, 119);
  background: rgb(52, 16, 0);
  color: rgb(255, 161, 119);
}

.color-3 {
  border: 0.1875rem solid rgb(236, 255, 119);
  background: rgb(45, 52, 0);
  color: rgb(236, 255, 119);
}

.color-4 {
  border: 0.1875rem solid rgb(119, 255, 155);
  background: rgb(0, 52, 14);
  color: rgb(119, 255, 155);
}

.color-5 {
  border: 0.1875rem solid rgb(140, 119, 255);
  background: rgb(0, 37, 52);
  color: rgb(140, 119, 255);
}

.color-6 {
  border: 0.1875rem solid rgb(235, 120, 255);
  background: rgb(42, 0, 52);
  color: rgb(235, 120, 255);
}

.color-7 {
  border: 0.1875rem solid rgb(198, 198, 198);
  background: rgb(73, 73, 73);
  color: rgb(198, 198, 198);
}

.color-8 {
  border: 0.1875rem solid rgb(255, 184, 119);
  background: rgb(52, 25, 0);
  color: rgb(255, 184, 119);
}

.color-9 {
  border: 0.1875rem solid rgb(255, 216, 119);
  background: rgb(52, 37, 0);
  color: rgb(255, 216, 119);
}

.color-\* {
  border: 0.1875rem solid rgb(196, 255, 255);
  background: rgb(25, 25, 25);
  color: rgb(255, 255, 255);
}

.font-sm {
  font-size: 0.9375rem;
}
/* // 动画效果总时间为s,延时s启动。 */
.base-element:hover {
  animation: element-hover 0.5s 0.1s;
  animation-fill-mode: forwards;
}

@keyframes element-hover {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.3);
  }
}
.active {
  background-color: #fff;
}
</style>
