import * as React from 'react';
import ResourceIndex from '../../Components/ResourceIndex'

export default function FacultyIndex({ faculties }) {

    return (
        <ResourceIndex
            data={faculties}
            rows={{
                faculty_number: 'Номер факультета',
                name: 'Название факультета',
                dean_name: 'ФИО декана',
                dean_phone_number: 'Телефон декана',
                zup_name: 'ФИО ЗУП',
                zup_phone_number: 'Телефон ЗУП',
            }}
            title="Факультеты"
            currentRoute="faculty"
        />
    );
}