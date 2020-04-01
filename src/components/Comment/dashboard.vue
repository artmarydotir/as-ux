<template>
  <v-container>
    <p>
      برای بخش کامنت ها یک گزینه ی داشبورد جداگانه داشته باشیم.
      همانطور که در قدیم آمار روزانه از نظرات داشتیم.
      میتوانیم این آمار را حالا با جزییات بیشتر و نمودار نمایش بدهیم.
    </p>
    <v-alert
      border="top"
      color="red lighten-2"
      dark
    >
      <p>
        ۱- ابتدا تعدادا کل کامنت های امروز را نمایش میدهیم.
      </p>
    <p>
      ۲-آمار کامنت های منتشر شده و نشده و خوانده شده از امروز را نیز نمایش میدهیم.
    </p>
    </v-alert>
    <v-alert
      border="top"
      color="blue-grey lighten-2"
      dark
    >
      <p>
        ۳- نموار های دایره ای از تعداد کل کامنت ها با استاتوس های هرکدام نمایش میدهیم.
      </p>
    </v-alert>
    <v-alert
      border="top"
      color="green "
      dark
    >
      <p>
        ۴-نمودار دایره ای از اینکه برای کدام سرویس کامنت بیشتری تا بحال گذاشته شده است.
      </p>
    </v-alert>
  </v-container>
</template>
<script>

export default {
  name: 'commentDashboard',
};
</script>
