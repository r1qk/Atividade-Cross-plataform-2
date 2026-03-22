import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function App() {
  const [count, setcount] = useState(0);
  const [msg, setMsg] = useState('Comece a beber água IMEDIATAMENTE!!!');
  const [bgcolor, setBgColor] = useState('#0f0f0f');
  const [txtcolor, setTxtColor] = useState('#aaa'); 
  const [txtsize, setSize] = useState(20)
  useEffect(() => {
    if (count === 0) setMsg('Comece a beber água IMEDIATAMENTE!!!'), setBgColor('#0f0f0f'), setTxtColor('#aaa'), setSize(20);
    if (count === 1) setMsg('🔥 Você começou a beber. Glub glub'), setBgColor('#29465B'), setTxtColor('#aaa'), setSize(20); 
    if (count === 8) setMsg('🚀 Meta do dia atingida!'), setBgColor('#1F6357'), setTxtColor('#aaa'), setSize(20);
    if (count === 20) setMsg('💀 Vai já morrer'), setBgColor('#931314'), setTxtColor('#000000'), setSize(48);
  }, [count]);
  return (
    <View style={[styles.container, {backgroundColor: bgcolor}]}>
      <Text style={[styles.msg, {fontSize: txtsize, color: txtcolor}]}>{msg}</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setcount(count + 1)}>
        <Text style={styles.btnText}>Adicionar um copo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn_reset} onPress={() => setcount(0)}>
        <Text style={styles.btnText}>Resetar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f0f0f' },
  msg:       { color: '#aaa', fontSize: 20, marginBottom: 12 },
  counter:   { color: '#fff', fontSize: 72, fontWeight: 'bold' },
  btn:       { marginTop: 24, backgroundColor: '#0041C2', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 50 },
  btn_reset: { marginTop: 24, backgroundColor: '#228B22', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 50 },
  btnText:   { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});

// adicionar duas novas condições
