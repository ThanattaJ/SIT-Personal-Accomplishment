<template>
<div style="padding-left: 22.3%;padding-right: 22.3%;padding-top: 2%;padding-bottom: 8%;">
    <form method="post" action="#" id="printJS-form">
        <div class="columns A4Padding breakWord">
            <div class="column is-4 leftSide">
                <div class="name">
                    <img :src="GET_RESUME_DATA.profile.resume_picture == null ? GET_RESUME_DATA.profile.profile_picture : GET_RESUME_DATA.profile.resume_picture" 
                        style="vertical-align: middle;
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;" 
                    />
                    <p style="font-size:22px;font-weight:bold">{{GET_FIRSTNAME}}</p>
                    <p style="font-size:18px;font-weight:bold">{{GET_LASTNAME}}</p>
                    <p v-if="GET_NICKNAME != null">( {{GET_NICKNAME}} )</p>
                </div>

                <div class="contact_topic">
                    <p class="topic_resume" v-if="GET_STREET != null|| GET_SUBDISTRICT != null || GET_DISTRICT != null || GET_PROVINCE != null && GET_ZIPCODE != null || GET_BIRTHDAY != null || GET_PHONENO != null || GET_EMAIL != null">CONTACT</p>
                    <p class="contact" v-if="GET_STREET != null || GET_SUBDISTRICT != null || GET_DISTRICT != null || GET_PROVINCE != null && GET_ZIPCODE != null">
                        <img src="./../../assets/placeholder.png" class="contact_icon" />
                        ADDRESS
                    </p>
                    <p class="contact_detail">
                        {{GET_STREET}}
                        <span v-if="GET_STREET != null">,</span>
                        {{GET_SUBDISTRICT}}
                        <span v-if="GET_SUBDISTRICT != null">,</span>
                        {{GET_DISTRICT}}
                        <span v-if="GET_DISTRICT != null">,</span>
                        {{GET_PROVINCE}}
                        <span v-if="GET_PROVINCE != null && GET_ZIPCODE != null">,</span>
                        {{GET_ZIPCODE}}
                    </p>
                    <p class="contact" v-if="GET_BIRTHDAY != null"><img src="./../../assets/cake (2).png" class="contact_icon" />DATE OF BIRTH</p>
                    <p class="contact_detail">{{GET_BIRTHDAY}}</p>
                    <p class="contact" v-if="GET_PHONENO != null"><img src="./../../assets/phone.png" class="contact_icon" />PHONE</p>
                    <p class="contact_detail">{{GET_PHONENO}}</p>
                    <p class="contact" v-if="GET_EMAIL != null"><img src="./../../assets/gmail.png" class="contact_icon" />E-MAIL</p>
                    <p class="contact_detail">{{GET_EMAIL}}</p>

                    <!-- <div> -->
                    <div>
                        <p class="topic_resume" v-if="GET_WEBSITE.length > 0">WEBSITE</p>
                        <p class="webList_resume" v-for="(web,index) in GET_WEBSITE" v-bind:key="'web'+index">
                            <img :src="getImgUrl(web.network)" class="contact_icon" />{{web.username}}
                        </p>
                    </div>
                    <!-- <div> -->
                    <!-- <div v-if="GET_SKILL.length > 0"> -->
                    <div>
                        <p class="topic_resume" v-if="GET_SKILL.length > 0">SKILL</p>
                        <table>
                            <tbody>
                                <tr v-for="(skill,index) in GET_SKILL" v-bind:key="'skill'+index">
                                    <td><span class="languageTag">{{skill.skill_name}}</span></td>
                                    <td style="padding-left: 15px;padding-bottom: 7px;">{{skill.level_name}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <!-- <div v-if="GET_LANGUAGE.length > 0"> -->
                        <p class="topic_resume" v-if="GET_LANGUAGE.length > 0">LANGUAGE</p>
                        <table>
                            <tbody>
                                <tr v-for="(lang,index) in GET_LANGUAGE" v-bind:key="'lang'+index">
                                    <td><span class="languageTag">{{lang.language_name}}</span></td>
                                    <td style="padding-left: 15px;padding-bottom: 7px;">{{lang.level_name}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- ขวา -->
            <div class="column">
                <div class="rightSide" v-if="GET_BIOGRAPHY != null">
                    <p class="topic_resume">PROFILE</p>
                    <p>{{GET_BIOGRAPHY}}</p>
                </div>
                <!-- EDUCATION -->
                <!-- <div> -->
                <div class="rightSide" v-if="GET_EDUCATION_DATA.length > 0">
                    <p class="topic_resume">EDUCATION</p>
                    <div class="columns" v-for="(edu,index) in GET_EDUCATION_DATA" v-bind:key="'edu'+index">
                        <div class="column is-4 eduYear_resumePdf">{{edu.start_year}} - {{edu.end_year}}</div>
                        <div class="column eduDetail">
                            <p>{{edu.level_name}} at <i>{{edu.school_name}}</i></p>
                            <p>{{edu.program}} | GPA {{edu.gpa}}</p>
                        </div>
                    </div>
                </div>
                <!-- EXPERIENCE -->
                <div v-if="GET_EXPERIENCE_SELECTED.length > 0">
                    <p class="topic_resume">EXPERIENCE</p>
                    <div class="columns" v-for="(exp,index) in GET_EXPERIENCE_SELECTED" v-bind:key="'exp'+index">
                        <div class="column is-3 eduYear_resumePdf">{{exp.start_year_en}}</div>
                        <div class="column eduDetail">
                            <p><b>{{exp.project_name_en}}</b></p>
                            <p style="font-size:12px">{{exp.project_abstract}}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </form>
</div>
</template>

<script>
import './../css/resumePdf.css';

import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    data() {
        return {
            website: [],
            allNetwork: [{
                    id: 0,
                    network: 'Twitter',
                    color: '#47ABE7'
                },
                {
                    id: 1,
                    network: 'Facebook',
                    color: '#4267b2'
                },
                {
                    id: 2,
                    network: 'Instagram',
                    color: '#FF007A'
                },
                {
                    id: 3,
                    network: 'Linkedin',
                    color: '#0077B5'
                },
                {
                    id: 4,
                    network: 'Github',
                    color: '#24292D'
                },
                {
                    id: 5,
                    network: 'Pinterest',
                    color: '#E60122'
                },
                {
                    id: 6,
                    network: 'Vimeo',
                    color: '#1CB7EA'
                },
                {
                    id: 7,
                    network: 'Tumblr',
                    color: '#000000'
                },
                {
                    id: 8,
                    network: 'Flickr',
                    color: '#0063DB'
                },
                {
                    id: 9,
                    network: 'Link',
                    color: '#DB6318'
                },
            ]
        }
    },
    computed: {
        ...mapGetters([
            // 'GET_STUDENT_PROFILE',
            'GET_RESUME_DATA',
            'GET_FIRSTNAME', 'GET_LASTNAME',
            'GET_NICKNAME', 'GET_BIOGRAPHY',
            'GET_STREET', 'GET_SUBDISTRICT', 'GET_DISTRICT', 'GET_PROVINCE', 'GET_ZIPCODE',
            'GET_EMAIL', 'GET_PHONENO', 'GET_BIRTHDAY',
            'GET_SOCIAL', 'GET_EDUCATION_DATA', 'GET_EXPERIENCE_DATA', 'GET_EXPERIENCE_SELECTED', 'GET_SKILL', 'GET_LANGUAGE', 'GET_WEBSITE'
        ])
    },
    mounted() {
        this.LOAD_RESUME_DATA()
        console.log("GET_RESUME_DATA : ",GET_RESUME_DATA)
        console.log("GET_NICKNAME : ",GET_NICKNAME)
        console.log("GET_BIOGRAPHY : ",GET_BIOGRAPHY)
        console.log("GET_STREET : ",GET_STREET)
        console.log("GET_SUBDISTRICT : ",GET_SUBDISTRICT)
        console.log("GET_DISTRICT : ",GET_DISTRICT)
        console.log("GET_PROVINCE : ",GET_PROVINCE)
        console.log("GET_ZIPCODE : ",GET_ZIPCODE)
        console.log("GET_EMAIL : ",GET_EMAIL)
        console.log("GET_PHONENO : ",GET_PHONENO)
        console.log("GET_BIRTHDAY : ",GET_BIRTHDAY)
        console.log("GET_SOCIAL : ",GET_SOCIAL)
        console.log("GET_EDUCATION_DATA : ",GET_EDUCATION_DATA)
    },
    methods: {
        getImgUrl(pic) {
            return require('./../../assets/' + pic + '.png')
        },
        ...mapActions(['LOAD_RESUME_DATA']),
    }

}
</script>
