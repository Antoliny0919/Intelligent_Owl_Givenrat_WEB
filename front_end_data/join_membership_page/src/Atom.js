import { atom } from "recoil";

export const state = atom({
  key: 'state',
  default: {
    form_section: [

      {
        id: 1,
        keyWord: '아이디',
        placeholder: '아이디를 입력해주세요',
        inputType: 'text',
        Duplication: true,
        attentionBlock: true,
      },
      {
        id: 2,
        keyWord: '비밀번호',
        placeholder: '비밀번호를 입력해주세요',
        inputType: 'password',
        Duplication: false,
        attentionBlock: true,
      },
      {
        id: 3,
        keyWord: '비밀번호확인',
        placeholder: '비밀번호를 한번 더 입력해주세요',
        inputType: 'password',
        Duplication: false,
        attentionBlock: true,
      },
      {
        id: 4,
        keyWord: '이메일',
        placeholder: '예: intelligent@givenrat.com',
        inputType: 'email',
        Duplication: true,
        attentionBlock: true,
      },
      {
        id: 5,
        keyWord: '상호',
        placeholder: '상호를 입력해 주세요',
        inputType: 'text',
        Duplication: false,
        attentionBlock: true,
      },
      {
        id: 6,
        keyWord: '회사 전화번호',
        placeholder: '숫자만 입력해주세요',
        inputType: 'text',
        Duplication: false,
        attentionBlock: true,
      },
      {
        id: 7,
        keyWord: '팩스번호',
        placeholder: '숫자만 입력해주세요',
        inputType: 'text',
        Duplication: false,
        attentionBlock: true,
      },
      {
        id: 8,
        keyWord: '주소',
        placeholder: false,
        inputType: 'button',
        Duplication: false,
        attentionBlock: true,
      },
    ],

    detail_address_form_section: {
      keyWord: false,
      attentionBlock: false,
      inputType: 'text',
      placeholder: false,
    },

    gender_selector_form_section: {
      form_data : [
        {
          id: 1,
          keyWord: '남자',
        },
        {
          id: 2,
          keyWord: '여자',
        },
        {
          id: 3,
          keyWord: '선택안함',
        },
      ],
      title: "성별",
    },
    
    birth_date_from_section: 
    
    {
      form_data: [
        {
          id: 1,
          placeholder: 'YYYY',
          maxLength: '4',
          divide: true,
        },
        {
          id: 2,
          placeholder: 'MM',
          maxLength: '2',
          divide: true,
        },
        {
          id: 3,
          placeholder: 'DD',
          maxLength: '2',
          divide: false,
        }
      ],

      title: '생년월일',
    }


  }
})

export const emailState = atom({
  key: 'emailState',
  default: false,
})

export const againSearch = atom({
  key: 'againSearch',
  default: false,
})

