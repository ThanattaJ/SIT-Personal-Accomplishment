<template>
<div class="stricky">
    <article class="columns" style="margin-left: 0 !important;margin-right: 0 !important;margin-top: -.75rem !important;">
        <section class="column is-one-quarter resumeForm">
            <div v-if="GET_SHOWPAGE == 1">
                <div style="text-align:center">
                    <router-link :to="'/student/'+GET_USERNAME"><i class="la la-angle-left"></i></router-link>
                    <span class="titleText">Generate Resume</span>
                    <label for="file-input">
                        <img src="./../../assets/upload.png" class="uploadImg" alt="Smiley face" height="22" width="22">
                    </label>
                    <input id="file-input" type="file" ref="resumeImg" @change="uploadResumeImg" style="display: none;" />
                </div>
                <div style="color:#F7F7F7;height:22px">.</div>
                <ValidationObserver tag="form" ref="resumeData" v-slot="{ invalid }">
                    <div>
                        <md-field>
                            <label>Firstname</label>
                            <ValidationProvider name=" Firstname " rules="required">
                                <div slot-scope="{ errors }">
                                    <md-input id="" :value="GET_FIRSTNAME" @change="handleUpdate('UPDATE_FIELD','SET_FIRSTNAME')"></md-input>
                                    <p class="help is-danger">{{ errors[0] }}</p>
                                </div>
                            </ValidationProvider>
                        </md-field>
                        <md-field>
                            <label>Lastname</label>
                            <ValidationProvider name=" Lastname " rules="required">
                                <div slot-scope="{ errors }">
                                    <md-input id="" :value="GET_LASTNAME" @change="handleUpdate('UPDATE_FIELD','SET_LASTNAME')"></md-input>
                                    <p class="help is-danger">{{ errors[0] }}</p>
                                </div>
                            </ValidationProvider>
                        </md-field>
                        <md-field>
                            <label>Nickname</label>
                            <ValidationProvider name=" Nickname " rules="required">
                                <div slot-scope="{ errors }">
                                    <md-input id="" :value="GET_NICKNAME" @change="handleUpdate('UPDATE_FIELD','SET_NICKNAME')"></md-input>
                                    <p class="help is-danger">{{ errors[0] }}</p>
                                </div>
                            </ValidationProvider>
                        </md-field>
                        <!-- <md-field>
                            <label>Firstname</label>
                            <md-input id="" :value="GET_FIRSTNAME" @change="handleUpdate('UPDATE_FIELD','SET_FIRSTNAME')"></md-input>
                        </md-field> -->
                        <!-- <md-field>
                            <label>Lastname</label>
                            <md-input id="" :value="GET_LASTNAME" @change="handleUpdate('UPDATE_FIELD','SET_LASTNAME')"></md-input>
                        </md-field> -->
                        <!-- <md-field>
                            <label>Nickname</label>
                            <md-input id="" :value="GET_NICKNAME" @change="handleUpdate('UPDATE_FIELD','SET_NICKNAME')"></md-input>
                        </md-field> -->
                        <md-field>
                            <label>Biography</label>
                            <md-textarea md-autogrow id="" :value="GET_BIOGRAPHY" @change="handleUpdate('UPDATE_FIELD','SET_BIOGRAPHY')"></md-textarea>
                        </md-field>
                        <div class="mainTopic">ADDRESS<i class="la la-home" style="font-size:15px !important; margin-left:5px"></i></div>
                        <md-field>
                            <label>Street</label>
                            <md-input id="" :value="GET_STREET" @change="handleUpdate('UPDATE_FIELD','SET_STREET')"></md-input>
                        </md-field>
                        <md-field>
                            <label>Subdistrict</label>
                            <md-input id="" :value="GET_SUBDISTRICT" @change="handleUpdate('UPDATE_FIELD','SET_SUBDISTRICT')"></md-input>
                        </md-field>
                        <md-field>
                            <label>District</label>
                            <md-input id="" :value="GET_DISTRICT" @change="handleUpdate('UPDATE_FIELD','SET_DISTRICT')"></md-input>
                        </md-field>
                        <md-field>
                            <label>Province</label>
                            <md-input id="" :value="GET_PROVINCE" @change="handleUpdate('UPDATE_FIELD','SET_PROVINCE')"></md-input>
                        </md-field>
                        <md-field>
                            <label>Zipcode</label>
                            <md-input id="" :value="GET_ZIPCODE" @change="handleUpdate('UPDATE_FIELD','SET_ZIPCODE')"></md-input>
                        </md-field>
                        <div class="mainTopic">CONTACT INFO<i class="la la-whatsapp" style="font-size:15px !important; margin-left:5px"></i></div>
                        <md-field>
                            <label>Phone Number</label>
                            <md-input id="" :value="GET_PHONENO" @change="handleUpdate('UPDATE_FIELD','SET_PHONENO')"></md-input>
                        </md-field>

                        <md-field>
                            <label>Email</label>
                            <ValidationProvider name=" Email " rules="required">
                                <div slot-scope="{ errors }">
                                    <md-input id="" :value="GET_EMAIL" @change="handleUpdate('UPDATE_FIELD','SET_EMAIL')"></md-input>
                                    <p class="help is-danger">{{ errors[0] }}</p>
                                </div>
                            </ValidationProvider>
                        </md-field>
                        <!-- <md-field>
                            <label>Email</label>
                            <md-input id="" :value="GET_EMAIL" @change="handleUpdate('UPDATE_FIELD','SET_EMAIL')"></md-input>
                        </md-field> -->
                        <!-- <md-field>
                            <label>Date of Birth</label>
                            <md-input id="" :value="GET_BIRTHDAY" @change="handleUpdate('UPDATE_FIELD','SET_BIRTHDAY')"></md-input>
                        </md-field> -->
                        <VueCtkDateTimePicker v-model="dob" :formatted="formatted" :locale="locale" :color="color" :only-date="onlydate" :label="label" :no-header="noHeader" :auto-close="autoClose" :no-button="noButton" :no-label="noLabel" />
                        <!-- <div class="column">
                            <div class="field">
                                <label class="label inputName">Date of Event</label>
                                <VueCtkDateTimePicker v-model="date_of_event" :formatted="formatted" :color="color" :only-date="onlydate" :label="label" :no-header="noHeader" :auto-close="autoClose" :no-button="noButton" :no-label="noLabel" />
                            </div>
                        </div> -->
                    </div>
                </ValidationObserver>

                <div style="color:#F7F7F7;height:12px">.</div>

                <!-- Website -->
                <div id="topic8" class="topic" v-on:click="SET_PAGE(2)">
                    <i class="la la-ellipsis-v"></i>
                    <span>Websites</span>
                    <span class="plusIcon"><i class="la la-plus"></i></span>
                </div>
                <div style="color:#F7F7F7;height:12px">.</div>
                <!-- EXTENDED INFO -->
                <div class="mainTopic">EXTENDED INFO<i class="la la-info-circle" style="font-size:15px !important; margin-left:5px"></i></div>
                <div style="color:#F7F7F7;height:12px">.</div>
                <!-- Educations -->
                <div id="topic9" class="topic" v-on:click="SET_PAGE(3)">
                    <i class="la la-ellipsis-v"></i>
                    <span>Educations</span>
                    <span class="plusIcon"><i class="la la-plus"></i></span>
                </div>
                <div style="color:#F7F7F7;height:12px">.</div>
                <!-- Experiences -->
                <div id="topic10" class="topic" v-on:click="SET_PAGE(4)">
                    <i class="la la-ellipsis-v"></i>
                    <span>Experiences</span>
                    <span class="plusIcon"><i class="la la-plus"></i></span>
                </div>
                <div style="color:#F7F7F7;height:12px">.</div>
                <!-- Skills -->
                <div id="topic11" class="topic" v-on:click="SET_PAGE(5)">
                    <i class="la la-ellipsis-v"></i>
                    <span>Skills</span>
                    <span class="plusIcon"><i class="la la-plus"></i></span>
                </div>
                <div style="color:#F7F7F7;height:12px">.</div>
                <!-- Languages -->
                <div id="topic12" class="topic" v-on:click="SET_PAGE(6)">
                    <i class="la la-ellipsis-v"></i>
                    <span>Languages</span>
                    <span class="plusIcon"><i class="la la-plus"></i></span>
                </div>
                <div style="text-align:center;margin-top: 20px;">
                    <a class="button is-rounded savepdf" @click="saveDataToDb" onclick="printJS({
                        printable: 'printJS-form', 
                        type: 'html',
                        style: `@import url('https://fonts.googleapis.com/css?family=Asap');`,
                        font: 'Asap',
                        targetStyles: ['*']
                        })">
                        <span>Save as PDF</span>
                        <span class="icon">
                            <i class="la la-download"></i>
                        </span>
                    </a>
                </div>

                <div style="color:#F7F7F7;height:90px"></div>
            </div>
            <!-- Website -->
            <div v-if="GET_SHOWPAGE == 2">
                <addWebsite></addWebsite>
            </div>

            <!-- Education -->
            <div v-if="GET_SHOWPAGE == 3">
                <addEducation></addEducation>
            </div>
            <!-- Experience -->
            <div v-if="GET_SHOWPAGE == 4">
                <addExperience></addExperience>
            </div>
            <!-- Skill -->
            <div v-if="GET_SHOWPAGE == 5">
                <addSkill></addSkill>
            </div>
            <!-- Language -->
            <div v-if="GET_SHOWPAGE == 6">
                <addLanguage></addLanguage>
            </div>
        </section>

        <section class="column resumeGen">
            <resumePdf></resumePdf>
        </section>

    </article>

</div>
</template>

<script>
import './../css/genResume.css';
import addWebsite from './addWebsite'
import addEducation from './addEducation.vue'
import addExperience from './addExperience.vue'
import addSkill from './addSkill.vue'
import addLanguage from './addLanguage.vue'
import resumePdf from './resumePdf.vue'
import {
    mapGetters,
    mapActions
} from 'vuex'
import axios from 'axios'
import {
    ValidationObserver,
    ValidationProvider
} from "vee-validate";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
    data() {
        return {
            page: '1',
            dob: null
        }
    },
    props: {
        locale: {
            type: String,
            default: 'en'
        },
        formatted: {
            type: String,
            default: 'DD-MM-YYYY'
            // default: 'll'
        },
        color: {
            type: String,
            default: '#265080'
        },
        onlydate: {
            type: Boolean,
            default: true
        },
        label: {
            type: String,
            default: 'Date of Birth'
        },
        noHeader: {
            type: Boolean,
            default: true
        },
        autoClose: {
            type: Boolean,
            default: true
        },
        noButton: {
            type: Boolean,
            default: true
        },
        noLabel: {
            type: Boolean,
            default: false
        }
    },
    components: {
        addWebsite,
        addEducation,
        addExperience,
        addSkill,
        addLanguage,
        resumePdf,
        ValidationObserver,
        ValidationProvider,
        VueCtkDateTimePicker
    },
    computed: {
        ...mapGetters(['GET_SHOWPAGE', 'GET_RESUME_DATA', 'GET_FIRSTNAME', 'GET_LASTNAME', 'GET_NICKNAME', 'GET_BIOGRAPHY',
            'GET_STREET', 'GET_SUBDISTRICT', 'GET_DISTRICT', 'GET_PROVINCE', 'GET_ZIPCODE',
            'GET_EMAIL', 'GET_PHONENO', 'GET_BIRTHDAY', 'GET_CONFIG', 'GET_USERNAME',
            'GET_PATHNAME'
        ])
    },
    mounted() {
        this.LOAD_RESUME_DATA()
        this.dob = this.GET_BIRTHDAY.substring(6,10) + "-" + this.GET_BIRTHDAY.substring(3,5) + "-" + this.GET_BIRTHDAY.substring(0,2)
    },
    watch: {
        dob: function (val) {
            this.dob = val
            var dateOfBirth = this.dob.substring(8,10) + "-" + this.dob.substring(5, 7) + "-" + this.dob.substring(0, 4)
            this.SET_BIRTHDAY(dateOfBirth)
        }
    },
    methods: {
        ...mapActions(['SET_PAGE', 'LOAD_RESUME_DATA', 'UPDATE_FIELD', 'SET_BIRTHDAY']),
        handleUpdate(actionName, setter) {
            this[actionName]({
                callSetter: setter,
                value: event.target.value
            })
        },
        async saveDataToDb() {
            const resumeData = this.GET_RESUME_DATA.profile

            const data = {
                profile: {
                    biology: resumeData.introduce_detail == "" ? null : resumeData.introduce_detail,
                    firstname: resumeData.firstname,
                    lastname: resumeData.lastname,
                    email: resumeData.email,
                    nickname: resumeData.nickname,
                    birthday: resumeData.birthday == "" ? null : resumeData.birthday,
                    telephone_number: resumeData.telephone_number == "" ? null : resumeData.telephone_number,
                },
                address: {
                    description: resumeData.description == "" ? null : resumeData.description,
                    district: resumeData.district == "" ? null : resumeData.district,
                    subdistrict: resumeData.subdistrict == "" ? null : resumeData.subdistrict,
                    province: resumeData.province == "" ? null : resumeData.province,
                    postcode: resumeData.postcode == "" ? null : resumeData.postcode
                }
            }
            try {
                await axios
                    .patch(this.GET_PATHNAME + "/users/generate-resume/" + this.GET_USERNAME,
                        data, this.GET_CONFIG)
                    .then((res) => {
                        console.log("res : ",res)
                        console.log("message : ", res.data.message);
                        if(res.data.message == 'Update Success'){
                            // this.countGenResume()
                        }
                    })
                    .catch((err) => {
                        console.error("err : " + err);
                    });
            } catch (err) {
                console.log("FAILURE!!" + err);
            }
        },
        async countGenResume() {
            try {
                await axios
                    .patch(this.GET_PATHNAME + "/users/count-generate-resume", "", this.GET_CONFIG)
                    .then((res) => {
                        console.log("count gen resume");
                    })
                    .catch((err) => {
                        console.error("err : " + err);
                    });
            } catch (err) {
                console.log("FAILURE!!" + err);
            }
        },
        async uploadResumeImg() {
            const formData = new FormData();
            formData.append('file', this.$refs.resumeImg.files[0]);
            formData.append('method', 'resume');
            try {
                await axios
                    .patch(this.GET_PATHNAME + '/users/image', formData, this.GET_CONFIG)
                    .then((res) => {
                        this.LOAD_RESUME_DATA()
                        console.log("success! : ", res);
                    })
                    .catch((err) => {
                        console.error("err : " + err);
                    });
            } catch (err) {
                console.log('FAILURE!!' + err)
            }
        },
    }
}
</script>

<style>
/* .datetimepicker[data-v-564d30d4] {
    top: 10 !important;
    margin-bottom: 0 !important;
    bottom: 86% !important;
    position: fixed !important;
    z-index: 9 !important;
    width: 100% !important;
}
.datetimepicker .datepicker[data-v-564d30d4] {
    position: fixed !important;
    top: 14% !important;
} */
</style>
