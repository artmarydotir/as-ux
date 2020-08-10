<template>
  <div class="ma-12">
    <h3 class="display-1 mb-4">
      نکات مربوط به گروه
    </h3>
      <v-alert
        outlined
        type="error"
        text
      >
      ۱-
        باتوجه به تجربه ی کار با سایت های مختلف قرار بر این شده است که:
        چند گروه دیفالت از ابتدا ساخته شود.
        مانند گروه تبلیغات و یا
        گروه کاربران با دسترسی روزنامه و ...
      </v-alert>
      <v-alert
        outlined
        type="error"
        text
      >
        <p>
          ۲- برای حذف گروه باید دسترسی  گذاشته شود.
        </p>
      </v-alert>
      <v-alert
        outlined
        type="error"
        text
      >
        <p>
          ۳- گروه در دیتابیس فقط سافت دلیت میشود.
          و هر زمان که به اشتباه گروهی حذف بشود باید بتوان آن را باز گرداند.
        </p>
      </v-alert>
  </div>
</template>
<script>
export default {
  name: 'group-doc',
};
</script>
