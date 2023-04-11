<script lang="ts" setup>
import type { DataTableColumn } from 'naive-ui'
import { NButton, NInput } from 'naive-ui'
import { computed, h, onMounted } from 'vue'
import dayjs from 'dayjs'
import type { AnswerItem } from '@/store/modules/zhihu/helper'
import { useZhiHuStore } from '@/store'

const zhiHuStore = useZhiHuStore()

const answerList = computed(() => zhiHuStore.answerList)
const columns: ({ title: keyof AnswerItem | string; key: keyof AnswerItem | string } & DataTableColumn)[] = [
  {
    title: 'id',
    key: 'id',
    width: '100',
  },
  {
    title: 'question',
    key: 'question',
    minWidth: '300',
  },
  {
    title: 'answer',
    key: 'answer',
    minWidth: '800',
    render: (_, index) => {
      return !_.isEdit
        ? _.answer as string
        : h(
          NInput,
          {
            size: 'small',
            placeholder: 'enter the answer',
            type: 'textarea',
            value: _.answer as string,
            onUpdateValue(v) {
              answerList.value[index].answer = v
            },
          },
          { default: () => _.isEdit ? 'Save' : 'Edit' },
        )
    },
  },
  {
    title: 'createAt',
    key: 'createAt',
    width: '200',
    render: (_) => {
      return `${dayjs(_.createAt as string).format('YYYY/MM/DD HH:mm:ss')}`
    },
  },
  {
    title: 'action',
    key: 'action',
    width: '200',
    render: (_, index) => {
      return h(
        NButton,
        {
          size: 'small',
          onClick: () => {
            if (_.isEdit) {
              answerList.value[index].isEdit = false
            }
            else {
              answerList.value[index].isEdit = true
              zhiHuStore.saveAnswer(answerList.value[index])
            }
          },
        },
        { default: () => _.isEdit ? 'Save' : 'Edit' },
      )
    },
  },
]

onMounted(() => {
  zhiHuStore.fetchAnswerList()
})
</script>

<template>
  <n-data-table :columns="columns" :data="answerList" />
</template>
