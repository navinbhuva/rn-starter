import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RenderHtml from 'react-native-render-html'

const styles = StyleSheet.create({
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 1,
  },
  title: {fontSize: 16},
  details: {paddingVertical: 10, paddingHorizontal: 15},
})

const Accordion = ({policy, expanded, toggleExpand, width}) => (
  <View>
    <TouchableOpacity onPress={() => toggleExpand(policy.id)}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{policy.title}</Text>
        <Icon
          name={expanded === policy.id ? 'chevron-up' : 'chevron-down'}
          size={32}
          color="#333"
        />
      </View>
    </TouchableOpacity>
    {expanded === policy.id && (
      <View style={styles.details}>
        <RenderHtml contentWidth={width} source={{html: policy.detail}} />
      </View>
    )}
  </View>
)

export default Accordion
