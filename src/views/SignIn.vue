<template>
  <div class="container">
    <div class="page-header">登录</div>
    <div class="form-panel">
      <el-form
        :label-position="labelPosition"
        ref="form"
        label-width="80px"
        :rules="rules"
        :model="user"
        >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="user.pwd"></el-input>
        </el-form-item>
        <div class="operator">
          <el-button class="submit" type="primary" @click="submitForm('form')">登陆</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SignIn",
    data(){
      return {
        labelPosition: 'top',
         user: {
          name: '',
          pwd: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符之间', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '必须填写', trigger: 'blur' },
          ]
        }
      }
    },
    mounted(){
      this.$Progress.finish()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.SDK.User.logIn(this.user.name, this.user.pwd).then((loginUser) => {
              this.$store.dispatch('login', loginUser); // 保存到 Vuex 中
              this.$router.push({path: '/'}) // 回到上一页
              this.$message.success("登陆成功！")
            }).catch(error => {
              console.error(error)
              this.$message.error(error.message)
            })

          } else {
            console.log('error submit!!');
            this.$message.error('错了哦，您填写的信息有错误，请按照提示修改。');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-header{
    margin-top: 50px;
  }
  .form-panel{
    width: 600px;
    margin: 50px auto 0;
  }
  .operator{
    text-align: center;
  }
</style>