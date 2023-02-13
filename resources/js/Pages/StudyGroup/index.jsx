import * as React from 'react';
import ResourceIndex from '../../Components/ResourceIndex'

export default function StudyGroupIndex({ study_groups }) {

    return (
        <ResourceIndex
            data={study_groups}
            rows={{
                name_headman: 'ФИО старосты',
                phone_number_headman: 'Номер телефона старосты',
                course: 'Курс',
            }}
            title="Учебные группы"
        />
    );
}