import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

export default function ParentComponent() {
  const [age, setAge] = useState(24)
  const [salary, setSalary] = useState(50000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])

  return (
    <div>
      <Title />

      <Count text="Age" count={age} />
      <Button onClick={incrementAge}>Increment Age</Button>

      <br />

      <Count text="Salary" count={salary} />
      <Button onClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}
