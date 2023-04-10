import { defineStore } from 'pinia'
import type { AnswerItem, AnswerList, ZhiHuState } from './helper'
import { defaultSetting, getLocalState, setLocalState } from './helper'
import { fetchAnswerList } from '@/api/zhihu'

export const useZhiHuStore = defineStore('zhiHu-store', {
  state: (): ZhiHuState => getLocalState(),
  actions: {
    fetchAnswerList() {
      fetchAnswerList<{ records: AnswerList }>().then((response) => {
        this.updateAnswerList(response.data.records)
      })
    },

    updateAnswerList(answerList: Partial<AnswerList>) {
      this.$patch({ answerList })
      this.recordState()
    },

    saveAnswer(answer: AnswerItem) {

    },

    resetUserInfo() {
      this.answerList = defaultSetting().answerList
      this.recordState()
    },

    recordState() {
      setLocalState(this.$state)
    },
  },
})
