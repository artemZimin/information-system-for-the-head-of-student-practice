import ResourceCreate from '@/Components/ResourceCreate'
import React from 'react'

export default function StydyGroupCreate() {
    return (
        <ResourceCreate
        currentRoute="study-group"
        title="Добавить учебную группу"
        backTitle="Учебные группы"
        fields={[
            {type: 'text', name: 'name_headman', title: 'ФИО старосты'},
            {type: 'text', name: 'phone_number_headman', title: 'Номер телефона старосты'},
            {type: 'number', name: 'course', title: 'Курс'},
        ]}
        />
    )
}
