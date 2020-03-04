<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="Order_No" min-width="200">
      <template slot-scope="scope">{{ scope.row.order_no | orderNoFilter }}</template>
    </el-table-column>
    <el-table-column label="Price" width="195" align="center">
      <template slot-scope="scope">¥{{ scope.row.price | toThousandFilter }}</template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">{{ row.status }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from "@/api/remote-search";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: "success",
        pending: "danger"
      };
      return statusMap[status];
    },
    orderNoFilter(str) {
      return str.substring(0, 30);
    }
  },
  data() {
    return {
      list: [
        { 
          order_no: "001", 
          price: "100", 
          status: "saled" 
        },
        { 
          order_no: "002", 
          price: "150", 
          status: "saled" 
        },
        { 
          order_no: "003", 
          price: "180", 
          status: "saled" 
        },
      ]
    };
  },
  // created() {
  //   this.fetchData();
  // },
  // methods: {
  //   fetchData() {
  //     transactionList().then(response => {
  //       this.list = response.data.items.slice(0, 8);
  //     });
  //   }
  // }
};
</script>
