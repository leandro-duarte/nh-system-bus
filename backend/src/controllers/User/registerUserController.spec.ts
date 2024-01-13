import request from 'supertest'
import { describe, it, expect, jest } from '@jest/globals'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'
import prisma from '../../config/prismaClient'
import * as bcrypt from 'bcrypt'

jest.mock('../../config/prismaClient', () => ({
    user: {
        create: jest.fn()
    }
}))

describe('Register user controller unity test', () => {

    it('Shoud create a new user and return 201 status code', async () => {

        const userData = {
            name: 'Test User',
            username: 'testuser',
            cpf: '12345678901',
            rg: 'MG123456',
            adress: {"":""},
            email: 'test@example.com',
            phone: '1234567890',
            cellPhone: '0987654321',
            employeeId: '1',
            password: 'password123',
        }

        prisma.user.create

    })
})
