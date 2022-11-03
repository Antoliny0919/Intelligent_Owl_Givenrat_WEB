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
      }
    ]
  }
})

