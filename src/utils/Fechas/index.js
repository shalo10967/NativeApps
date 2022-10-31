import { format } from 'date-fns';
import { es } from 'date-fns/locale'

export const formatDate = (date, _format) => {
    return format(new Date(date), _format, { locale: es })
}
