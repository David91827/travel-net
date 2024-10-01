<template>
  <div>
    <h1>编辑行程</h1>
    <form @submit.prevent="updateTour">
      <input v-model="tour.title" placeholder="标题" />
      <input v-model="tour.image" placeholder="图片链接" />
     
