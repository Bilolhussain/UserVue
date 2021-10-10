<template>
<body>
    <Navbar/>
    <h2>Process Payroll</h2>
    <div class="router">
        <router-link to="/addemployee">Add Employee</router-link>
    </div>
    <router-view/>
  <div class="welcome container">
    <h3 class="Name">Full name: {{ firstName }} </h3>
    <h3 class="employee">Employee Id: {{ user.uid }} </h3>
    <div class="block">
        <h3 class ="time"> Enter Hours Worked:</h3>
        <div><button @click='add'>+</button></div>
        <h3>{{ hours}} </h3>
        <div><button @click='sub'>-</button></div>
        <div><button @click='handleSubmit'>Submit</button></div>
    </div>
    <h4>{{ new Date().toLocaleString() }}</h4>
    
  </div>
</body>
</template>

<script>
// import getUser from '@/composables/getUser'
import { ref, onMounted, watch } from 'vue'
import { projectFirestore, timestamp, projectAuth } from '@/firebase/config'
import { useRouter, useRoute } from 'vue-router'
import { Timestamp } from "firebase/firestore";
import Navbar from '../components/Navbar.vue'

export default {
    props: ['user'],
    setup(props) {
    // const { user } = getUser();
    
    // watch(()=> user, () => returnUser())
    const router = useRouter()
    const lastName = ref("");
    const firstName = ref("");
    const docs = ref("");
    const hours = ref(0);

    const add = () => {
        hours.value += 1 
    }
    const sub = () => {
        hours.value -= 1 
    }

    

    // const returnUser = async () => {
    //   const res = await projectFirestore
    //     .collection("users")
    //     .where("displayName", "==", "Abe")
    //     .get();
    //   if (!error.value) {
    //     // check your response here.
    //     console.log(res);
    //     const doc = res.filter((userObj) => {
    //       if ("Abe" === userObj.data().displayName) {
    //         return userObj.data().lastName;
    //       }
    //     });
    //     docs.value = doc;
    //   }
    // }
    const returnUser = async () => {
        const res = await projectFirestore
            .collection("users")
            .where("email", "==", props.user.email) // Case sensitive
            .get();

        const lastNameList = res.docs.map(d => `${d.data().firstName} ${d.data().lastName}`)
        firstName.value = lastNameList[0]
        console.log(firstName)
        // console.log(props.user)
        // console.log(props.user.displayName)
        // console.log(props.user.email)
        docs.value = lastNameList;
    }
    const handleSubmit = async() => {
        const payroll = {
        name: props.user.displayName,
        employeeid: props.user.uid,
        hours: hours.value,
        createdAt: Timestamp.fromDate(new Date())
        }
        const res = await projectFirestore.collection('processpayroll').add(payroll)
        router.push({name: 'AddEmployee'})
    }

    onMounted(returnUser)

    return { docs, returnUser, hours, add, sub, handleSubmit, lastName, firstName};
  },
  components: {
      Navbar
    }
}
</script>

<style>
    .welcome {
    text-align: center;
    padding: 20px 0;
    margin: 20px auto;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  /* .welcome button {
    margin: 20px auto;
  } */
  button {
    vertical-align: bottom;
  }
  .block {
      /* margin: auto; */
      display: inline-flex;
  }
  div {
  /* border: 1px solid gray; */
  padding: 8px;
}
h2{
    text-align: center;
    background-color: coral;
    }
h3{
    margin-top: 30px;
}
.router{
    border: 1px solid black;
    width: 120px;
    background-color: rgba(65, 179, 207, 0.5);
}
.Name{
    margin-left: 176px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    height: 20px;
    /* text-align: center; */
    text-indent: 0px;
    width: 560px;
    background-color: rgba(65, 179, 207, 0.5);
    /* border: 1px solid black; */
}
.time{
    margin-top:30px;
}
.employee{
    margin-left: 176px;
    padding-right: 100px;
    padding-left:80px;
    /* text-align: center; */
    text-indent: 20px;
    width: 418px;
    background-color: rgba(65, 179, 207, 0.5);
    /* border: 1px solid black; */
    /* text-indent: 50px; */
    /* border: 1px solid black; */
}
.block{
    /* border: 1px solid black; */
    background-color: rgba(65, 179, 207, 0.5);
    width: 490px;
    padding-left: 100px;
}

</style>