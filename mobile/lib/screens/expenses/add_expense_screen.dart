import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../services/supabase_service.dart';

class AddExpenseScreen extends StatefulWidget {
  const AddExpenseScreen({super.key});
  @override State<AddExpenseScreen> createState() => _State();
}
class _State extends State<AddExpenseScreen> {
  final _amtCtrl = TextEditingController();
  final _descCtrl = TextEditingController();
  String _cat = 'carburant';
  bool _loading = false;

  final _cats = {
    'carburant': 'Carburant',
    'entretien': 'Entretien',
    'reparation': 'Reparation',
    'assurance': 'Assurance',
    'lavage': 'Lavage',
    'autres': 'Autres',
  };

  Future<void> _submit() async {
    if (_amtCtrl.text.isEmpty) return;
    setState(() => _loading = true);
    try {
      await SupabaseService.addExpense({
        'category': _cat,
        'amount': int.parse(_amtCtrl.text.replaceAll(' ', '')),
        'description': _descCtrl.text.isEmpty ? null : _descCtrl.text,
      });
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
          content: Text('Depense enregistree'), backgroundColor: Color(0xFF389E74)));
        context.go('/dashboard');
      }
    } catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Erreur: $e')));
    } finally { if (mounted) setState(() => _loading = false); }
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Nouvelle Depense')),
    body: ListView(padding: const EdgeInsets.all(20), children: [
      const Text('Categorie', style: TextStyle(color: Colors.white70)),
      const SizedBox(height: 12),
      Wrap(spacing: 8, runSpacing: 8, children: _cats.entries.map((e) {
        final sel = _cat == e.key;
        return GestureDetector(
          onTap: () => setState(() => _cat = e.key),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            decoration: BoxDecoration(
              color: sel ? const Color(0xFF389E74) : const Color(0xFF161B22),
              borderRadius: BorderRadius.circular(10)),
            child: Text(e.value, style: const TextStyle(fontWeight: FontWeight.w500))));
      }).toList()),
      const SizedBox(height: 24),
      const Text('Montant (F CFA)', style: TextStyle(color: Colors.white70)),
      const SizedBox(height: 8),
      TextFormField(controller: _amtCtrl, keyboardType: TextInputType.number,
        decoration: const InputDecoration(hintText: 'Ex: 5000')),
      const SizedBox(height: 16),
      const Text('Description (optionnel)', style: TextStyle(color: Colors.white70)),
      const SizedBox(height: 8),
      TextFormField(controller: _descCtrl, decoration: const InputDecoration(hintText: 'Details...')),
      const SizedBox(height: 32),
      ElevatedButton(
        onPressed: _loading ? null : _submit,
        child: _loading ? const CircularProgressIndicator(color: Colors.white) : const Text('Enregistrer')),
    ]),
  );
}
