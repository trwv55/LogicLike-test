import axios, { AxiosRequestConfig } from 'axios';
import { TCoursesData } from '../types/types';

export async function fetchData(url: string): Promise<TCoursesData[]> {
    const options: AxiosRequestConfig = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    }

    try {
        const response = await axios.get<TCoursesData[]>(url, options)

        if (!response.data) {
            throw new Error('Could not fetch data');
        }

        return response.data
    } catch (error) {
        console.error('Network response was not ok', error);
        throw error;
    }
}