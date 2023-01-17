import { setStorages, clearStorage } from "./storage";

export function getFormatRupiah (value) {
    let temp = value.replace(/[^,\d]/g, '').toString(),
        split = temp.split(','),
        remain = split[0].length % 3,
        idr = split[0].substr(0, remain),
        thousand = split[0].substr(remain).match(/\d{3}/gi);

    if (thousand) {
        let separator = remain ? ',' : '';
        idr += separator + thousand.join(',');
    }

    idr = split[1] != undefined ? idr + ',' + split[1] : idr;
    return idr;
}

export function handleInput (name, value) {
    switch (name) {
        case 'email':
            setStorages([
                { name: 'email', value: value }
            ])
            break
        case 'phone':
            setStorages([
                { name: 'phone', value: value }
            ])
            break
        case 'address':
            setStorages([
                { name: 'address', value: value }
            ])
            break
        case 'dropName':
            setStorages([
                { name: 'dropName', value: value }
            ])
            break
        case 'dropPhone':
            setStorages([
                { name: 'dropPhone', value: value }
            ])
    }
}

export function randomCode () {
    let length = 5
    let value = '23456789abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
    let result = ''
    for (let i = length; i > 0; --i) {
        result += value[Math.floor(Math.random() * value.length)]
    }

    return result
}

export function clearAllStorage () {
    clearStorage(['payment', 'dropPhone', 'dropName', 'email', 'phone', 'shipment', 'address'])
}