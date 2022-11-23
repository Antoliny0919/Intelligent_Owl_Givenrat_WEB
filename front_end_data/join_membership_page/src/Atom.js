import { atom } from "recoil";

export const state = atom({
  key: 'state',
  default: {
    form_section: [

      {
        keyWord: '아이디',
        placeholder: '아이디를 입력해주세요',
        inputType: 'text',
        Duplication: true,
        attentionBlock: true,
      },
      {
        keyWord: '비밀번호',
        placeholder: '비밀번호를 입력해주세요',
        inputType: 'password',
        Duplication: false,
        attentionBlock: true,
      },
      {
        keyWord: '비밀번호확인',
        placeholder: '비밀번호를 한번 더 입력해주세요',
        inputType: 'password',
        Duplication: false,
        attentionBlock: true,
      },
      {
        keyWord: '이메일',
        placeholder: '예: intelligent@givenrat.com',
        inputType: 'email',
        Duplication: true,
        attentionBlock: true,
      },
      {
        keyWord: '상호',
        placeholder: '상호를 입력해 주세요',
        inputType: 'text',
        Duplication: false,
        attentionBlock: true,
      },
      {
        keyWord: '회사 전화번호',
        placeholder: '숫자만 입력해주세요',
        inputType: 'text',
        Duplication: false,
        attentionBlock: true,
      },
      {
        keyWord: '팩스번호',
        placeholder: '숫자만 입력해주세요',
        inputType: 'text',
        Duplication: false,
        attentionBlock: true,
      },
      {
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
          keyWord: '남자',
        },
        {
          keyWord: '여자',
        },
        {
          keyWord: '선택안함',
        },
      ],
      title : "성별",
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

