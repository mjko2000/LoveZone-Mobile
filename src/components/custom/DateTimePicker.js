import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { View, Text, FlatList, TouchableNativeFeedback } from 'react-native'
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters'
import colors from '../../config/colors'
import BottomSheet from './BottomSheet'

const nowDate = new Date()
const yearData = []
for (let i = 0; i < 50; i++) yearData.push(nowDate.getFullYear() - i)
const monthData = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const itemHeight = Math.round(verticalScale(30))
const DateTimePicker = ({ show, setShow, onResult }) => {
  const [month, setMonth] = useState(0)
  const [date, setDate] = useState(0)
  const [year, setYear] = useState(0)
  const [dateData, setDateData] = useState([])
  const renderYear = useCallback((value) => (
    <TouchableNativeFeedback
      onPress={() => setYear(value.index)}
    >
      <View style={styles.itemView}>
        <Text style={[styles.itemText, {color: value.index === year ? colors.primary : colors.white }]}>{value.item}</Text>
      </View>
    </TouchableNativeFeedback>
  ), [year])
  useEffect(() => {
    const days = new Date(yearData[year+1], month, 0).getDate()
    for (let i = 1; i <= days; i++) dateData[i - 1] = i
    setDateData(dateData)
  }, [month])
  const onClose = (isClose) => {
    setShow(isClose)
    const newDate = new Date()
    newDate.setFullYear(yearData[year])
    newDate.setMonth(month)
    newDate.setDate(date+1)
    onResult(newDate)
  }
  return (
    <BottomSheet
      show={show}
      setShow={onClose}
      height={itemHeight * 6}
    >
      <View style={styles.content}>
        <FlatList
          style={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          data={monthData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableNativeFeedback
              onPress={() => setMonth(index)}
            >
              <View style={styles.itemView}>
                <Text style={[styles.itemText, {color: index === month ? colors.primary : colors.white }]}>{item}</Text>
              </View>
            </TouchableNativeFeedback>
          )}
          snapToInterval={itemHeight}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dateData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableNativeFeedback
              onPress={() => setDate(index)}
            >
              <View style={styles.itemView}>
                <Text style={[styles.itemText, {color: index === date ? colors.primary : colors.white }]}>{item}</Text>
              </View>
            </TouchableNativeFeedback>
          )}
          snapToInterval={itemHeight}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={yearData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderYear}
          snapToInterval={itemHeight}
        />
      </View>
    </BottomSheet>
  )
}
const styles = ScaledSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  itemView: {
    height: itemHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderColor: colors.primary,
  },
  itemText: {
    fontSize: '14@s'
  }
})
export default memo(DateTimePicker)
