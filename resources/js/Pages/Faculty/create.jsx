import ResourceCreate from '@/Components/ResourceCreate'
import React from 'react'

export default function FacultyCreate() {
    return (
        <ResourceCreate
        currentRoute="faculty"
        title="Добавить факультет"
        backTitle="Факультеты"
        fields={[
            {type: 'text', name: 'faculty_number', title: 'Номер факультета'},
            {type: 'text', name: 'name', title: 'Название факультета'},
            {type: 'text', name: 'dean_name', title: 'ФИО декана'},
            {type: 'text', name: 'dean_phone_number', title: 'Номер телефона декана'},
            {type: 'text', name: 'zup_name', title: 'ФИО ЗУП'},
            {type: 'text', name: 'zup_phone_number', title: 'Номер телефона ЗУП'},
        ]}
        />
    )
}
